/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { BudgetActionTypes } from '../constants/BudgetActionTypes';

export const addPlan = (name) => ({type: BudgetActionTypes.ADD_PLAN, name});
export const selectPlan = (planId) => ({type: BudgetActionTypes.SELECT_PLAN, planId});
export const addTransaction = (planId, amount, category, tags) => ({type: BudgetActionTypes.ADD_TRANSACTION, planId, amount, category, tags});
export const addCollaborator = (planId, name) => ({type: BudgetActionTypes.ADD_COLLABORATOR, planId, name});
export const removeCollaborator = (planId, name) => ({type: BudgetActionTypes.REMOVE_COLLABORATOR, planId, name});
