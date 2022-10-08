import { createBrowserRouter } from "react-router-dom";

import AttendanceGrouping from '../views/AttendanceGrouping/AttendanceGrouping';
import AttendanceRecord from '../views/AttendanceRecord/AttendanceRecord';
import AttendanceSettings from '../views/AttendanceSettings/AttendanceSettings';
import Attendancestatistics from '../views/Attendancestatistics/Attendancestatistics';
import Schedulingplan from '../views/Schedulingplan/Schedulingplan';
import CheckWork from '../views/CheckWork/CheckWork';
import Index from "../views/Index/Index";
import Gateway from '../views/gateway/gateway.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: [
      {
        path: '/gateway',
        element: <Gateway />
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