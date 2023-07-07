import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    // ...
    generates: {
        'path/to/file.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-vue-apollo'],
            config: {
                withCompositionFunctions: true
            },
        },
    },
};
export default config;
