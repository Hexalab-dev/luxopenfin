import React, {useEffect, useState} from 'react';
import {useLocation} from '@docusaurus/router';

type FeedbackValue = 'up' | 'down' | null;

const STORAGE_KEY = 'luxopenfin-doc-feedback';

type FeedbackStore = Record<string, FeedbackValue>;

const loadStore = (): FeedbackStore => {
  if (typeof window === 'undefined') {
    return {};
  }
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as FeedbackStore) : {};
  } catch {
    return {};
  }
};

const saveStore = (store: FeedbackStore): void => {
  if (typeof window === 'undefined') {
    return;
  }
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
};

export const DocFeedback = (): JSX.Element => {
  const location = useLocation();
  const [selection, setSelection] = useState<FeedbackValue>(null);

  useEffect(() => {
    const store = loadStore();
    setSelection(store[location.pathname] || null);
  }, [location.pathname]);

  const handleSelect = (value: FeedbackValue): void => {
    const store = loadStore();
    store[location.pathname] = value;
    saveStore(store);
    setSelection(value);
  };

  return (
    <div className="margin-top--lg padding--md" style={{border: '1px solid var(--ifm-toc-border-color)', borderRadius: 12}}>
      <div className="margin-bottom--sm">
        <strong>Was this page helpful?</strong>
      </div>
      <div className="button-group button-group--block">
        <button
          type="button"
          className={`button button--sm button--primary ${selection === 'up' ? '' : 'button--outline'}`}
          onClick={() => handleSelect(selection === 'up' ? null : 'up')}
        >
          👍 Yes
        </button>
        <button
          type="button"
          className={`button button--sm button--primary ${selection === 'down' ? '' : 'button--outline'}`}
          onClick={() => handleSelect(selection === 'down' ? null : 'down')}
        >
          👎 Needs work
        </button>
      </div>
      <p className="text--secondary text--small margin-top--sm">
        Feedback is stored locally to remind you of reviewed sections. To share detailed comments, open a GitHub issue.
      </p>
    </div>
  );
};

