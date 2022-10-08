import { createBrowserRouter} from "react-router-dom";

import AttendanceGrouping from '../views/AttendanceGrouping/AttendanceGrouping';
import AttendanceRecord from '../views/AttendanceRecord/AttendanceRecord';
import AttendanceSettings from '../views/AttendanceSettings/AttendanceSettings';
import Attendancestatistics from '../views/Attendancestatistics/Attendancestatistics';
import Schedulingplan from '../views/Schedulingplan/Schedulingplan';
import CheckWork from '../views/CheckWork/CheckWork';
import Index from "../views/Index/Index";
import Gateway from '../views/Gateway/Gateway.jsx';
import Personal from '../views/Gateway/PersonalPortal/PersonalPortal';

import Reimbursement from "../views/Reimbursement/Reimbursement";
import AllReimbursement from "../views/AllReimbursement/AllReimbursement";
import MyReimbursement from "../views/MyReimbursement/MyReimbursement";
import ReimbursementApply from "../views/ReimbursementApply/ReimbursementApply";
import WithMe from "../views/WithMe/WithMe";
import ReimbursementExamine from "../views/ReimbursementExamine/ReimbursementExamine";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: [
      {
        path: 'gateway',
        element: <Gateway />,
        children: [
          {
            path: 'personal',
            element: <Personal/>
          }
        ]
      },
      {
        path: 'reimbursement',
        element: <Reimbursement />,
        children: [
          {
            path: 'all/reimbursement',
            element: <AllReimbursement />
          },
          {
            path: 'my/reimbursement',
            element: <MyReimbursement />
          },
          {
            path: 'reimbursement/apply',
            element: <ReimbursementApply />
          },
          {
            path: 'reimbursement/examine',
            element: <ReimbursementExamine />
          },
          {
            path: 'with/me',
            element: <WithMe />
          }
        ]
      },
      {
        path: 'check/Work',
        element: <CheckWork />,
        children: [
          {
            path: 'attendance/grouping',
            element: <AttendanceGrouping />
          },
          {
            path: 'attendance/record',
            element: <AttendanceRecord />
          },
          {
            path: 'attendance/settings',
            element: <AttendanceSettings />
          },
          {
            path: 'attendance/statistics',
            element: <Attendancestatistics />
          },
          {
            path: 'scheduling/plan',
            element: <Schedulingplan />
          }
        ]
      }
    ]
  },
  {
    path: '*',
    element: 404
  }
]);

export default router