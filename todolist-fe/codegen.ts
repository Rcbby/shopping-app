
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8080/graphql",
  documents: "**/*.{gql,graphql}",
  generates: {
    "src/graphql/generated/": {
      preset: "client",
      plugins: ["typescript", "typescript-operations", "typescript-react-apollo"]
    },
    "src/graphql.schema.json": {
      plugins: ["introspection"]
    }
  }
};

export default config;
