import { createBrowserRouter} from "react-router-dom";

import AttendanceGrouping from '../views/AttendanceGrouping/AttendanceGrouping';
import AttendanceRecord from '../views/AttendanceRecord/AttendanceRecord';
import AttendanceSettings from '../views/AttendanceSettings/AttendanceSettings';
import Attendancestatistics from '../views/Attendancestatistics/Attendancestatistics';
import Schedulingplan from '../views/Schedulingplan/Schedulingplan';
import CheckWork from '../views/CheckWork/CheckWork';
import Index from "../views/Index/Index";
// import Personal from '../views/Gateway/PersonalPortal/PersonalPortal';
import Reimbursement from "../views/Reimbursement/Reimbursement";
import AllReimbursement from "../views/AllReimbursement/AllReimbursement";
import MyReimbursement from "../views/MyReimbursement/MyReimbursement";
import ReimbursementApply from "../views/ReimbursementApply/ReimbursementApply";
import WithMe from "../views/WithMe/WithMe";
import ReimbursementExamine from "../views/ReimbursementExamine/ReimbursementExamine";
import Meeting from '../views/Meeting/Meeting';
import RoomList from '../views/Meeting/RoomList/RoomList';
import Administration from '../views/Administration/Administration';
import Portal from '../views/portal/portal'
import Apply from '../views/ReimbursementApply/ReimbursementApply'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: [
      {
        path: 'gateway',
        element: <Portal />
      },
      {
        path: 'meeting',
        element: <Meeting />,
        children: [
          {
            path: 'roomList',
            element: <RoomList/>
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
            path: 'administration',
            element: <Administration/>
          },
          {
            path: 'attendance/grouping',
            element: <Apply />
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