
# Express.js API Route Issue Analysis & Fix Plan

## Problem Summary
Your Express.js server is returning HTML instead of JSON for API routes, despite:
- Server logs showing successful responses (200 status)
- Route handlers never executing (no console logs)
- Browser receiving text/html content-type instead of application/json
- Response containing full HTML page (42,272 bytes) instead of JSON

## Root Cause Analysis

### Files Involved in the Problem

1. **server/index.ts** - Main server file with duplicate route registration
2. **server/routes.ts** - Route registration file with duplicate API route
3. **server/vite.ts** - Contains catch-all route that interferes with API routes

### Issue #1: Duplicate Route Registration
**Location**: `server/index.ts` (lines 8-50) and `server/routes.ts` (lines 8-65)

Both files register the same `/api/brevo-contact` route:
- `server/index.ts` registers it BEFORE calling `registerRoutes()`
- `server/routes.ts` registers it again inside `registerRoutes()`
- The second registration overwrites the first, but neither executes properly

### Issue #2: Route Order and Middleware Interference
**Location**: `server/index.ts` (lines 52-95)

The middleware stack order is problematic:
1. Contact route registered first
2. CORS middleware added
3. JSON parsing middleware added
4. Logging middleware added
5. `registerRoutes()` called (adds duplicate route)
6. Vite setup called (adds catch-all route)

### Issue #3: Catch-All Route Interference
**Location**: `server/vite.ts` (lines 12-16 in serveStatic function)

The catch-all route `app.use("*", ...)` intercepts ALL requests including API calls:
```typescript
app.use("*", (_req, res) => {
  res.sendFile(path.resolve(distPath, "index.html"));
});
```

This route serves `index.html` for any unmatched request, explaining why you receive HTML.

### Issue #4: Missing JSON Middleware Before Route Registration
**Location**: `server/index.ts`

The contact route is registered BEFORE `express.json()` middleware, so `req.body` is undefined when the route handler runs.

## Technical Root Cause

The primary issue is **route precedence and middleware order**:

1. Express routes are matched in registration order
2. The catch-all route `app.use("*", ...)` from Vite setup matches `/api/brevo-contact`
3. This happens because the API routes aren't properly registered before the catch-all
4. The catch-all serves `index.html`, resulting in HTML responses

## Fix Plan

### Step 1: Remove Duplicate Route Registration
- Remove the contact route from `server/index.ts`
- Keep only the route in `server/routes.ts`
- Ensure `registerRoutes()` is called BEFORE any catch-all routes

### Step 2: Fix Middleware Order
- Move `express.json()` before route registration
- Ensure CORS middleware is applied before routes
- Register API routes before Vite setup

### Step 3: Fix Route Registration Order
- Call `registerRoutes()` immediately after basic middleware setup
- Ensure Vite setup (which adds catch-all) happens LAST

### Step 4: Improve Route Handler
- Add explicit JSON content-type headers
- Use `res.json()` instead of manual `res.writeHead()` and `res.end()`
- Ensure proper error handling

## Implementation Steps

### 1. Clean up server/index.ts
Remove the duplicate contact route and fix middleware order:
- Remove lines 8-50 (duplicate contact route)
- Move `express.json()` before `registerRoutes()`
- Ensure `registerRoutes()` is called before Vite setup

### 2. Simplify server/routes.ts
Improve the route handler:
- Use `res.json()` for responses
- Remove manual header setting
- Simplify response logic

### 3. Verify Route Precedence
Ensure the order is:
1. Basic middleware (CORS, JSON parsing)
2. API routes via `registerRoutes()`
3. Vite setup with catch-all route

## Expected Outcome

After implementing these fixes:
- API routes will execute before catch-all routes
- `req.body` will be properly parsed
- Responses will have correct `application/json` content-type
- Console logs from route handlers will appear
- Browser will receive JSON responses instead of HTML

## Testing Plan

1. Start the server with `npm run dev`
2. Submit a contact form or make a POST request to `/api/brevo-contact`
3. Verify in browser dev tools:
   - Response content-type is `application/json`
   - Response body contains JSON, not HTML
   - Response size is small (not 42,272 bytes)
4. Check server console for route handler logs
5. Verify email functionality still works

## Files to Modify

1. `server/index.ts` - Remove duplicate route, fix middleware order
2. `server/routes.ts` - Simplify route handler, use proper Express response methods

The core issue is that your API routes are being overshadowed by the catch-all route that serves the React application. By fixing the registration order and removing duplicates, the API will work correctly.
