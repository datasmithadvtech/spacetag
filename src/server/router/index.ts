import { router as createRouter } from "@/server/trpc";

export type Router = typeof router;

export const router = createRouter({});
