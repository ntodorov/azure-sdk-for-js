/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/workflowTriggerHistoriesMappers";
import * as Parameters from "../models/parameters";
import { LogicManagementClientContext } from "../logicManagementClientContext";

/** Class representing a WorkflowTriggerHistories. */
export class WorkflowTriggerHistories {
  private readonly client: LogicManagementClientContext;

  /**
   * Create a WorkflowTriggerHistories.
   * @param {LogicManagementClientContext} client Reference to the service client.
   */
  constructor(client: LogicManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of workflow trigger histories.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkflowTriggerHistoriesListResponse>
   */
  list(resourceGroupName: string, workflowName: string, triggerName: string, options?: Models.WorkflowTriggerHistoriesListOptionalParams): Promise<Models.WorkflowTriggerHistoriesListResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param callback The callback
   */
  list(resourceGroupName: string, workflowName: string, triggerName: string, callback: msRest.ServiceCallback<Models.WorkflowTriggerHistoryListResult>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, workflowName: string, triggerName: string, options: Models.WorkflowTriggerHistoriesListOptionalParams, callback: msRest.ServiceCallback<Models.WorkflowTriggerHistoryListResult>): void;
  list(resourceGroupName: string, workflowName: string, triggerName: string, options?: Models.WorkflowTriggerHistoriesListOptionalParams | msRest.ServiceCallback<Models.WorkflowTriggerHistoryListResult>, callback?: msRest.ServiceCallback<Models.WorkflowTriggerHistoryListResult>): Promise<Models.WorkflowTriggerHistoriesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workflowName,
        triggerName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.WorkflowTriggerHistoriesListResponse>;
  }

  /**
   * Gets a workflow trigger history.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param historyName The workflow trigger history name. Corresponds to the run name for triggers
   * that resulted in a run.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkflowTriggerHistoriesGetResponse>
   */
  get(resourceGroupName: string, workflowName: string, triggerName: string, historyName: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkflowTriggerHistoriesGetResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param historyName The workflow trigger history name. Corresponds to the run name for triggers
   * that resulted in a run.
   * @param callback The callback
   */
  get(resourceGroupName: string, workflowName: string, triggerName: string, historyName: string, callback: msRest.ServiceCallback<Models.WorkflowTriggerHistory>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param historyName The workflow trigger history name. Corresponds to the run name for triggers
   * that resulted in a run.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workflowName: string, triggerName: string, historyName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkflowTriggerHistory>): void;
  get(resourceGroupName: string, workflowName: string, triggerName: string, historyName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkflowTriggerHistory>, callback?: msRest.ServiceCallback<Models.WorkflowTriggerHistory>): Promise<Models.WorkflowTriggerHistoriesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workflowName,
        triggerName,
        historyName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.WorkflowTriggerHistoriesGetResponse>;
  }

  /**
   * Resubmits a workflow run based on the trigger history.
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param historyName The workflow trigger history name. Corresponds to the run name for triggers
   * that resulted in a run.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  resubmit(resourceGroupName: string, workflowName: string, triggerName: string, historyName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param historyName The workflow trigger history name. Corresponds to the run name for triggers
   * that resulted in a run.
   * @param callback The callback
   */
  resubmit(resourceGroupName: string, workflowName: string, triggerName: string, historyName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The resource group name.
   * @param workflowName The workflow name.
   * @param triggerName The workflow trigger name.
   * @param historyName The workflow trigger history name. Corresponds to the run name for triggers
   * that resulted in a run.
   * @param options The optional parameters
   * @param callback The callback
   */
  resubmit(resourceGroupName: string, workflowName: string, triggerName: string, historyName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  resubmit(resourceGroupName: string, workflowName: string, triggerName: string, historyName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workflowName,
        triggerName,
        historyName,
        options
      },
      resubmitOperationSpec,
      callback);
  }

  /**
   * Gets a list of workflow trigger histories.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.WorkflowTriggerHistoriesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.WorkflowTriggerHistoriesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.WorkflowTriggerHistoryListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.WorkflowTriggerHistoryListResult>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.WorkflowTriggerHistoryListResult>, callback?: msRest.ServiceCallback<Models.WorkflowTriggerHistoryListResult>): Promise<Models.WorkflowTriggerHistoriesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.WorkflowTriggerHistoriesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/histories",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workflowName,
    Parameters.triggerName
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.top,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowTriggerHistoryListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/histories/{historyName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workflowName,
    Parameters.triggerName,
    Parameters.historyName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowTriggerHistory
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const resubmitOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Logic/workflows/{workflowName}/triggers/{triggerName}/histories/{historyName}/resubmit",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workflowName,
    Parameters.triggerName,
    Parameters.historyName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.WorkflowTriggerHistoryListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
