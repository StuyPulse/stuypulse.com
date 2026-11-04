/// <reference types="astro/client" />
/// <reference path="../.astro/types.d.ts" />

// YAML in src/data is checked against a schema in src/data/index.ts before anything uses it.
declare module "*.yml" {
  const data: unknown;
  export default data;
}
