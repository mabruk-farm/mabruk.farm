---
description: Create a new Sanity CMS schema with proper types and validation
allowed-tools: Read, Write, Edit, Glob
---

Create a new Sanity.io v3 schema for the Mabruk Farm CMS.

Requirements:
1. Create schema file in `sanity/schemas/{name}.ts`
2. Use TypeScript with proper type exports
3. Include Indonesian field titles and descriptions for the Studio UI
4. Add validation rules (required fields, string lengths, etc.)
5. Include preview configuration for the Studio list view
6. Add the schema to the schema registry in `sanity/schemas/index.ts`
7. Use slug auto-generation from title/name fields
8. Image fields should use Sanity image type with hotspot enabled

Schema to create: $ARGUMENTS
