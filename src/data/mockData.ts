/**
 * MOCK DATA - SetuBase Developer Platform
 * All data is fake and for demonstration purposes only
 */

export interface Project {
  id: string;
  name: string;
  region: string;
  status: 'running' | 'stopped';
  type: string;
  backend: string;
  appType: string;
  createdAt: string;
  publicUrl: string;
}

export const initialProjects: Project[] = [
  {
    id: 'proj_001',
    name: 'ecommerce-api',
    region: 'India',
    status: 'running',
    type: 'Full Stack App',
    backend: 'PostgreSQL + Auth + Realtime',
    appType: 'Next.js',
    createdAt: '2024-01-15',
    publicUrl: 'https://ecommerce-api-mock.setubase.app'
  },
  {
    id: 'proj_002',
    name: 'analytics-dashboard',
    region: 'India',
    status: 'running',
    type: 'Full Stack App',
    backend: 'PostgreSQL + Auth + Realtime',
    appType: 'Node.js',
    createdAt: '2024-01-10',
    publicUrl: 'https://analytics-dashboard-mock.setubase.app'
  },
  {
    id: 'proj_003',
    name: 'ml-inference-api',
    region: 'India',
    status: 'stopped',
    type: 'Full Stack App',
    backend: 'PostgreSQL + Auth + Realtime',
    appType: 'Python',
    createdAt: '2024-01-05',
    publicUrl: 'https://ml-inference-mock.setubase.app'
  }
];

export const mockDeployLogs = [
  { timestamp: '2024-01-15T10:32:45Z', message: '[Mock] Cloning repository...' },
  { timestamp: '2024-01-15T10:32:48Z', message: '[Mock] Installing dependencies...' },
  { timestamp: '2024-01-15T10:33:15Z', message: '[Mock] npm install completed successfully' },
  { timestamp: '2024-01-15T10:33:18Z', message: '[Mock] Building application...' },
  { timestamp: '2024-01-15T10:34:02Z', message: '[Mock] Build completed in 44s' },
  { timestamp: '2024-01-15T10:34:05Z', message: '[Mock] Deploying to edge network...' },
  { timestamp: '2024-01-15T10:34:12Z', message: '[Mock] Deployment successful' },
  { timestamp: '2024-01-15T10:34:15Z', message: '[Mock] Application is live at https://example-mock.setubase.app' },
];

export const mockRuntimeLogs = [
  { timestamp: '2024-01-15T11:00:00Z', level: 'info', message: '[Mock] Server started on port 3000' },
  { timestamp: '2024-01-15T11:00:05Z', level: 'info', message: '[Mock] Database connection established' },
  { timestamp: '2024-01-15T11:00:10Z', level: 'info', message: '[Mock] Auth service initialized' },
  { timestamp: '2024-01-15T11:01:23Z', level: 'info', message: '[Mock] GET /api/health - 200 OK (12ms)' },
  { timestamp: '2024-01-15T11:02:45Z', level: 'info', message: '[Mock] POST /api/users - 201 Created (45ms)' },
  { timestamp: '2024-01-15T11:03:12Z', level: 'warn', message: '[Mock] Rate limit approaching for IP 192.168.1.1' },
  { timestamp: '2024-01-15T11:03:45Z', level: 'error', message: '[Mock] Failed to connect to external webhook: ECONNREFUSED' },
  { timestamp: '2024-01-15T11:04:00Z', level: 'info', message: '[Mock] GET /api/products - 200 OK (23ms)' },
  { timestamp: '2024-01-15T11:04:30Z', level: 'warn', message: '[Mock] Deprecated API endpoint called: /api/v1/legacy' },
  { timestamp: '2024-01-15T11:05:30Z', level: 'info', message: '[Mock] WebSocket connection established' },
];

export const mockEnvVars = [
  { key: 'DATABASE_URL', value: 'postgres://mock:****@db.mock.setubase.co:5432/postgres', secret: false },
  { key: 'AUTH_SECRET', value: '••••••••••••••••', secret: true },
  { key: 'REALTIME_URL', value: 'wss://realtime.mock.setubase.co', secret: false },
  { key: 'API_KEY', value: 'sb_mock_key_xxxxxxxxxxxxx', secret: false },
];

export const mockMetrics = {
  cpu: { value: 23, label: 'CPU Usage', unit: '%' },
  memory: { value: 512, label: 'Memory', unit: 'MB / 1024 MB' },
  requests: { value: 1247, label: 'Requests (24h)', unit: '' },
  bandwidth: { value: 2.3, label: 'Bandwidth', unit: 'GB' },
};

// Mock database tables
export const mockTables = [
  { name: 'users', rows: 1247, rls: true },
  { name: 'products', rows: 892, rls: true },
  { name: 'orders', rows: 3421, rls: true },
  { name: 'sessions', rows: 156, rls: false },
  { name: 'audit_logs', rows: 8923, rls: true },
];

export const mockTableData = {
  users: [
    { id: 1, email: 'john@example.com', created_at: '2024-01-10' },
    { id: 2, email: 'jane@example.com', created_at: '2024-01-12' },
    { id: 3, email: 'bob@example.com', created_at: '2024-01-14' },
  ],
  products: [
    { id: 1, name: 'Widget A', price: 29.99, stock: 150 },
    { id: 2, name: 'Widget B', price: 49.99, stock: 75 },
    { id: 3, name: 'Widget C', price: 19.99, stock: 200 },
  ],
};

// Mock auth users
export const mockAuthUsers = [
  { id: 'usr_001', email: 'admin@example.com', provider: 'email', createdAt: '2024-01-05T10:00:00Z', lastSignIn: '2024-01-15T09:30:00Z' },
  { id: 'usr_002', email: 'john.doe@gmail.com', provider: 'email', createdAt: '2024-01-08T14:22:00Z', lastSignIn: '2024-01-14T16:45:00Z' },
  { id: 'usr_003', email: 'sarah@company.io', provider: 'email', createdAt: '2024-01-10T09:15:00Z', lastSignIn: '2024-01-15T08:00:00Z' },
  { id: 'usr_004', email: 'dev@startup.co', provider: 'phone', createdAt: '2024-01-12T11:30:00Z', lastSignIn: '2024-01-13T14:20:00Z' },
];

// Mock auth providers
export const mockAuthProviders = [
  { name: 'Email', enabled: true, icon: 'Mail' },
  { name: 'Phone', enabled: true, icon: 'Phone' },
  { name: 'Google OAuth', enabled: false, icon: 'Chrome' },
  { name: 'GitHub OAuth', enabled: false, icon: 'Github' },
  { name: 'Apple OAuth', enabled: false, icon: 'Apple' },
];

// Mock storage buckets
export const mockStorageBuckets = [
  { name: 'avatars', files: 234, size: '12.4 MB', public: true },
  { name: 'documents', files: 89, size: '156.2 MB', public: false },
  { name: 'uploads', files: 1247, size: '2.3 GB', public: false },
];

// Mock edge functions
export const mockEdgeFunctions = [
  { name: 'send-email', runtime: 'Deno', status: 'deployed', lastDeployed: '2024-01-14T18:30:00Z', invocations: 1234 },
  { name: 'process-webhook', runtime: 'Deno', status: 'deployed', lastDeployed: '2024-01-15T10:15:00Z', invocations: 567 },
  { name: 'generate-pdf', runtime: 'Deno', status: 'error', lastDeployed: '2024-01-13T09:00:00Z', invocations: 89 },
  { name: 'resize-image', runtime: 'Deno', status: 'deployed', lastDeployed: '2024-01-12T14:45:00Z', invocations: 2341 },
];

// Mock deploys
export const mockDeploys = [
  { 
    id: 'deploy_001', 
    status: 'success', 
    commit: 'feat: add user dashboard',
    sha: 'a1b2c3d',
    branch: 'main',
    timestamp: '2024-01-15T10:34:15Z',
    duration: '1m 47s',
    logs: mockDeployLogs
  },
  { 
    id: 'deploy_002', 
    status: 'failed', 
    commit: 'fix: update dependencies',
    sha: 'e4f5g6h',
    branch: 'main',
    timestamp: '2024-01-14T16:20:00Z',
    duration: '0m 32s',
    logs: [
      { timestamp: '2024-01-14T16:20:00Z', message: '[Mock] Cloning repository...' },
      { timestamp: '2024-01-14T16:20:03Z', message: '[Mock] Installing dependencies...' },
      { timestamp: '2024-01-14T16:20:28Z', message: '[Mock] ERROR: Failed to resolve dependency @types/node@^22.0.0' },
      { timestamp: '2024-01-14T16:20:32Z', message: '[Mock] Build failed with exit code 1' },
    ]
  },
  { 
    id: 'deploy_003', 
    status: 'success', 
    commit: 'chore: cleanup unused imports',
    sha: 'i7j8k9l',
    branch: 'main',
    timestamp: '2024-01-14T11:05:00Z',
    duration: '1m 23s',
    logs: mockDeployLogs
  },
  { 
    id: 'deploy_004', 
    status: 'success', 
    commit: 'feat: implement auth flow',
    sha: 'm0n1o2p',
    branch: 'feature/auth',
    timestamp: '2024-01-13T09:45:00Z',
    duration: '2m 01s',
    logs: mockDeployLogs
  },
];
