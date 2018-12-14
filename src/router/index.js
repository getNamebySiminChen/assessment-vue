import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AssessmentEvaluation from '@/components/pages/secretaryAndManagerAssessment/AssessmentEvaluation'
import AssessmentStatic from '@/components/pages/secretaryAndManagerAssessment/AssessmentStatic'
import TaskAssign from '@/components/pages/deptHeadAssessment/TaskAssign'
import AssessmentPlan from '@/components/pages/HRAssessment/AssessmentPlan'
import AssessmentProcess from '@/components/pages/HRAssessment/AssessmentProcess'
import SelfEvaluation from '@/components/pages/selfAssessment/SelfEvaluation'
import AssessmentSetting from '@/components/pages/assessmentSettings/AssessmentSetting'
import AssessmentContent from '@/components/pages/assessmentSettings/AssessmentContent'
import ExaminerSetting from '@/components/pages/assessmentSettings/ExaminerSetting'
import DeptSetting from '@/components/pages/assessmentSettings/DeptSetting'




Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/assessmentEvaluation',
      name: 'AssessmentEvaluation',
      component: AssessmentEvaluation
    },
    {
      path: '/assessmentStatic',
      name: 'AssessmentStatic',
      component: AssessmentStatic
    },
    {
      path: '/taskAssign',
      name: 'TaskAssign',
      component: TaskAssign
    },
    {
      path: '/assessmentPlan',
      name: 'AssessmentPlan',
      component: AssessmentPlan
    },
    {
      path: '/assessmentProcess',
      name: 'AssessmentProcess',
      component: AssessmentProcess
    },
    {
      path: '/selfEvaluation',
      name: 'SelfEvaluation',
      component: SelfEvaluation
    },
    {
      path: '/assessmentSetting',
      name: 'AssessmentSetting',
      component: AssessmentSetting
    },
    {
      path: '/assessmentContent',
      name: 'AssessmentContent',
      component: AssessmentContent
    },
    {
      path: '/deptSetting',
      name: 'DeptSetting',
      component: DeptSetting
    }
  ]
})
