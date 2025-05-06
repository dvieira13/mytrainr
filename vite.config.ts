import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                index: resolve(__dirname, 'index.html'),
                'my-account': resolve(__dirname, 'my-account.html'),
                'create-account': resolve(__dirname, 'create-account.html'),
                'generate-plan': resolve(__dirname, 'generate-plan.html'),
                'my-schedule': resolve(__dirname, 'my-schedule.html'),
                'pace-calculator': resolve(__dirname, 'pace-calculator.html'),
                'sign-in': resolve(__dirname, 'sign-in.html'),
                'workout-types': resolve(__dirname, 'workout-types.html'),
            }
        }
    }
});