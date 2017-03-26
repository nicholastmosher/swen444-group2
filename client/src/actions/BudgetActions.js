/**
 * @author Nick Mosher <nicholastmosher@gmail.com>
 */
import { BudgetActionTypes } from '../constants/BudgetActionTypes';

export const selectPlan = (planId) => ({type: BudgetActionTypes.SELECT_PLAN, planId});
