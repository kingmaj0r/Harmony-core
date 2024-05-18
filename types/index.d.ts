declare module 'harmony-core' {
    import { Plugin } from 'vite';

    const harmonyCore: () => Plugin;
    export default harmonyCore;
}