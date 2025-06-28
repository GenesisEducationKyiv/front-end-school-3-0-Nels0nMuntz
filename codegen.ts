import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8000/graphql",
  documents: ["src/**/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "./src/shared/api/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
    "./src/shared/api/__generated__/types.ts": {
      plugins: ["typescript", "typescript-operations"],
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
