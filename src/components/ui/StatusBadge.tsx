/**
 * Status Badge Component
 * Shows project/service status with visual indicator
 */

interface StatusBadgeProps {
  status: 'running' | 'stopped';
}

export function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <div className="flex items-center gap-2">
      <div className={`status-dot ${status === 'running' ? 'status-dot-running' : 'status-dot-stopped'}`} />
      <span className="text-sm capitalize text-muted-foreground">
        {status}
      </span>
    </div>
  );
}
