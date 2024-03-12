import path from 'path';

const config = getDefaulConfig(__dirname);

// Monorepo
const projectRoot = __dirname;
const workspaceRoot = path.resolve(__dirname, '../..');

config.watchFolders = [workspaceRoot];
if (config.resolver) {
  config.resolver.nodeModulesPaths = [
    path.resolve(projectRoot, 'node_modules'),
    path.resolve(workspaceRoot, 'node_modules'),
  ];
}

// @ts-expect-error - this is fine
module.exports = config;
