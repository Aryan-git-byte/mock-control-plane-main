/**
 * Mock Label Component
 * Clearly indicates that data/features are mocked
 */

interface MockLabelProps {
  className?: string;
}

export function MockLabel({ className = '' }: MockLabelProps) {
  return (
    <span className={`mock-label ${className}`}>
      Mock
    </span>
  );
}
