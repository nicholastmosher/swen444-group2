/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { PlanActionTypes } from '../constants/PlanActionTypes';

export const createPlan = (name, ownerId) => ({type: PlanActionTypes.CREATE_PLAN, name, ownerId});
export const renamePlan = (planId, name) => ({type: PlanActionTypes.RENAME_PLAN, planId, name});
export const addCollaborator = (planId, userId) => ({type: PlanActionTypes.ADD_COLLABORATOR, planId, userId});
export const removeCollaborator = (planId, userId) => ({type: PlanActionTypes.REMOVE_COLLABORATOR, planId, userId});
export const editCollaborator = (planId, userId, permissions) => ({type: PlanActionTypes.EDIT_COLLABORATOR, planId, userId, permissions});
