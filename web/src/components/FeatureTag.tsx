import React from 'react';

type FeatureState = 'DRAFT' | 'DEV' | 'TEST' | 'READY' | 'LIVE' | 'DEPRECATED';

const LABELS: Record<FeatureState, string> = {
  DRAFT: 'Draft',
  DEV: 'In Development',
  TEST: 'Testing',
  READY: 'Ready',
  LIVE: 'Live',
  DEPRECATED: 'Deprecated',
};

type Props = {
  state: FeatureState;
};

export const FeatureTag = ({state}: Props): JSX.Element => {
  return (
    <span className="docStatusBadge" data-state={state} title={`Feature lifecycle: ${LABELS[state]}`}>
      {LABELS[state]}
    </span>
  );
};

