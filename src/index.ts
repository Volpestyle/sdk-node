// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import { BrowserClient, BaseBrowserClientOptions } from './base';
import {
  Context,
  ContextCreateParams,
  ContextCreateResponse,
  ContextUpdateResponse,
  Contexts,
} from './resources/contexts';
import { Extension, ExtensionCreateParams, Extensions } from './resources/extensions';
import { Project, ProjectListResponse, ProjectUsage, Projects } from './resources/projects';
import {
  Session,
  SessionCreateParams,
  SessionCreateResponse,
  SessionListParams,
  SessionListResponse,
  SessionLiveURLs,
  SessionRetrieveResponse,
  SessionUpdateParams,
  Sessions,
} from './resources/sessions/sessions';

export interface ClientOptions extends BaseBrowserClientOptions {
  /**
   * Your [Browserbase API Key](https://www.browserbase.com/settings).
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['BROWSERBASE_BASE_URL'].
   */
  baseURL?: string | null | undefined;
}

export interface WallcrawlerOptions extends BaseBrowserClientOptions {
  /**
   * Your Wallcrawler API Key.
   */
  apiKey?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['WALLCRAWLER_BASE_URL'].
   */
  baseURL?: string | null | undefined;
}

/**
 * API Client for interfacing with the Browserbase API.
 */
export class Browserbase extends BrowserClient {
  /**
   * API Client for interfacing with the Browserbase API.
   *
   * @param {string | undefined} [opts.apiKey=process.env['BROWSERBASE_API_KEY'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['BROWSERBASE_BASE_URL'] ?? https://api.browserbase.com] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('BROWSERBASE_BASE_URL'),
    apiKey = Core.readEnv('BROWSERBASE_API_KEY'),
    ...opts
  }: ClientOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.BrowserbaseError(
        "The BROWSERBASE_API_KEY environment variable is missing or empty; either provide it, or instantiate the Browserbase client with an apiKey option, like new Browserbase({ apiKey: 'My API Key' }).",
      );
    }

    const options: ClientOptions & { apiKey: string; baseURL: string } = {
      apiKey,
      baseURL: baseURL || `https://api.browserbase.com`,
      ...opts,
    };

    super(options);
  }

  contexts: API.Contexts = new API.Contexts(this as any);
  extensions: API.Extensions = new API.Extensions(this as any);
  projects: API.Projects = new API.Projects(this as any);
  sessions: API.Sessions = new API.Sessions(this as any);

  protected getServiceName(): string {
    return 'Browserbase';
  }

  protected getDefaultBaseURL(): string {
    return 'https://api.browserbase.com';
  }

  protected getAuthHeaders(): Core.Headers {
    return { 'X-BB-API-Key': this.apiKey };
  }

  static Browserbase = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static BrowserbaseError = Errors.BrowserbaseError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

/**
 * API Client for interfacing with the Wallcrawler API.
 */
export class Wallcrawler extends BrowserClient {
  constructor({
    baseURL = Core.readEnv('WALLCRAWLER_BASE_URL'),
    apiKey = Core.readEnv('WALLCRAWLER_API_KEY'),
    ...opts
  }: WallcrawlerOptions = {}) {
    if (apiKey === undefined) {
      throw new Errors.BrowserbaseError(
        "The WALLCRAWLER_API_KEY environment variable is missing or empty; either provide it, or instantiate the Wallcrawler client with an apiKey option, like new Wallcrawler({ apiKey: 'My API Key' }).",
      );
    }

    const options: WallcrawlerOptions & { apiKey: string; baseURL: string } = {
      apiKey,
      baseURL: baseURL || `https://api.wallcrawler.dev/v1`,
      ...opts,
    };

    super(options);
  }

  contexts: API.Contexts = new API.Contexts(this as any);
  extensions: API.Extensions = new API.Extensions(this as any);
  projects: API.Projects = new API.Projects(this as any);
  sessions: API.Sessions = new API.Sessions(this as any);

  protected getServiceName(): string {
    return 'Wallcrawler';
  }

  protected getDefaultBaseURL(): string {
    return 'https://api.wallcrawler.dev/v1';
  }

  protected getAuthHeaders(): Core.Headers {
    return { 'x-wc-api-key': this.apiKey };
  }

  static Wallcrawler = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static BrowserbaseError = Errors.BrowserbaseError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

// Static namespace exports for both classes
Browserbase.Contexts = Contexts;
Browserbase.Extensions = Extensions;
Browserbase.Projects = Projects;
Browserbase.Sessions = Sessions;

Wallcrawler.Contexts = Contexts;
Wallcrawler.Extensions = Extensions;
Wallcrawler.Projects = Projects;
Wallcrawler.Sessions = Sessions;

export declare namespace Browserbase {
  export type RequestOptions = Core.RequestOptions;

  export {
    Contexts as Contexts,
    type Context as Context,
    type ContextCreateResponse as ContextCreateResponse,
    type ContextUpdateResponse as ContextUpdateResponse,
    type ContextCreateParams as ContextCreateParams,
  };

  export {
    Extensions as Extensions,
    type Extension as Extension,
    type ExtensionCreateParams as ExtensionCreateParams,
  };

  export {
    Projects as Projects,
    type Project as Project,
    type ProjectUsage as ProjectUsage,
    type ProjectListResponse as ProjectListResponse,
  };

  export {
    Sessions as Sessions,
    type Session as Session,
    type SessionLiveURLs as SessionLiveURLs,
    type SessionCreateResponse as SessionCreateResponse,
    type SessionRetrieveResponse as SessionRetrieveResponse,
    type SessionListResponse as SessionListResponse,
    type SessionCreateParams as SessionCreateParams,
    type SessionUpdateParams as SessionUpdateParams,
    type SessionListParams as SessionListParams,
  };
}

export declare namespace Wallcrawler {
  export type RequestOptions = Core.RequestOptions;

  export {
    Contexts as Contexts,
    type Context as Context,
    type ContextCreateResponse as ContextCreateResponse,
    type ContextUpdateResponse as ContextUpdateResponse,
    type ContextCreateParams as ContextCreateParams,
  };

  export {
    Extensions as Extensions,
    type Extension as Extension,
    type ExtensionCreateParams as ExtensionCreateParams,
  };

  export {
    Projects as Projects,
    type Project as Project,
    type ProjectUsage as ProjectUsage,
    type ProjectListResponse as ProjectListResponse,
  };

  export {
    Sessions as Sessions,
    type Session as Session,
    type SessionLiveURLs as SessionLiveURLs,
    type SessionCreateResponse as SessionCreateResponse,
    type SessionRetrieveResponse as SessionRetrieveResponse,
    type SessionListResponse as SessionListResponse,
    type SessionCreateParams as SessionCreateParams,
    type SessionUpdateParams as SessionUpdateParams,
    type SessionListParams as SessionListParams,
  };
}

// Utility exports
export { toFile, fileFromPath } from './uploads';
export {
  BrowserbaseError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';
