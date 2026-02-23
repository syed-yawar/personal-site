'use client';

import contact from '@/data/contact';
import { useEffect, useReducer, useRef, useState } from 'react';

// Animation timing constants
const ANIMATION_TICK_MS = 50; // Tick length in milliseconds
const HOLD_TICKS_AFTER_MESSAGE = 50; // Ticks to wait after message completes

const FALLBACK_EMAIL = 'contact@syedyawar.com';

function parseMailtoAddress(link: string | undefined): string | null {
  if (!link?.startsWith('mailto:')) return null;
  return link.replace('mailto:', '').split('?')[0] || null;
}

function getConfiguredEmailAddress(): string {
  const configuredLink =
    contact.find((item) => item.kind === 'email')?.link ??
    contact.find((item) => item.link.startsWith('mailto:'))?.link;

  const parsedAddress = parseMailtoAddress(configuredLink);
  if (!parsedAddress) return FALLBACK_EMAIL;

  const [localPart, domain] = parsedAddress.split('@');
  if (!localPart || !domain) return FALLBACK_EMAIL;

  return `${localPart}@${domain}`;
}

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

const CONFIGURED_EMAIL = getConfiguredEmailAddress();
const [CONFIGURED_EMAIL_LOCAL_PART, CONFIGURED_EMAIL_DOMAIN] =
  CONFIGURED_EMAIL.split('@');
const messages = [CONFIGURED_EMAIL_LOCAL_PART];

function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!delay) return;

    const id = setInterval(() => savedCallback.current?.(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

interface AnimationState {
  idx: number;
  message: string;
  char: number;
  isActive: boolean;
}

type AnimationAction =
  | { type: 'TICK'; loopMessage: boolean; hold: number }
  | { type: 'PAUSE' }
  | { type: 'RESUME'; maxIdx: number };

function animationReducer(
  state: AnimationState,
  action: AnimationAction,
): AnimationState {
  switch (action.type) {
    case 'TICK': {
      let newIdx = state.idx;
      let newChar = state.char;

      if (state.char - action.hold >= messages[state.idx].length) {
        newIdx += 1;
        newChar = 0;
      }

      if (newIdx === messages.length) {
        if (action.loopMessage) {
          return {
            idx: 0,
            message: '',
            char: 0,
            isActive: true,
          };
        }
        return {
          ...state,
          isActive: false,
        };
      }

      return {
        idx: newIdx,
        message: messages[newIdx].slice(0, newChar),
        char: newChar + 1,
        isActive: true,
      };
    }
    case 'PAUSE':
      return { ...state, isActive: false };
    case 'RESUME':
      return {
        ...state,
        isActive: state.idx < action.maxIdx,
      };
    default:
      return state;
  }
}

interface EmailLinkProps {
  loopMessage?: boolean;
}

export default function EmailLink({ loopMessage = false }: EmailLinkProps) {
  // Check for reduced motion preference
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(prefersReducedMotion());
  }, []);

  const [state, dispatch] = useReducer(animationReducer, {
    idx: 0,
    message: '',
    char: 0,
    isActive: true,
  });

  // If user prefers reduced motion, show static email immediately
  useEffect(() => {
    if (reducedMotion) {
      dispatch({ type: 'PAUSE' });
    }
  }, [reducedMotion]);

  useInterval(
    () => {
      dispatch({ type: 'TICK', loopMessage, hold: HOLD_TICKS_AFTER_MESSAGE });
    },
    state.isActive && !reducedMotion ? ANIMATION_TICK_MS : null,
  );

  // Use configured local-part as the default static message.
  const displayMessage =
    reducedMotion || state.message === ''
      ? CONFIGURED_EMAIL_LOCAL_PART
      : state.message;

  const handlePause = () => dispatch({ type: 'PAUSE' });
  const handleResume = () => {
    if (!reducedMotion) {
      dispatch({ type: 'RESUME', maxIdx: messages.length });
    }
  };

  const emailContent = (
    <>
      <span className="contact-email-prefix">{displayMessage}</span>
      <span className="contact-email-domain">@{CONFIGURED_EMAIL_DOMAIN}</span>
    </>
  );

  return (
    <div
      className="contact-email-container"
      onMouseEnter={handlePause}
      onMouseLeave={handleResume}
    >
      <a
        href={`mailto:${CONFIGURED_EMAIL}`}
        className="contact-email-link"
        onFocus={handlePause}
        onBlur={handleResume}
      >
        {emailContent}
      </a>
    </div>
  );
}
