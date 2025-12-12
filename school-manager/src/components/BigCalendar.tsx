"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import "moment/locale/pt-br";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";
import WeekHeader from "./WeekHeader";

moment.locale("pt-br");
const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onView={setView}
      min={new Date(2025, 1, 0, 8, 0)}
      max={new Date(2025, 1, 0, 17, 0)}
      components={{
        header: WeekHeader
      }}
      messages={{
        work_week: "Semana",
        day: "Dia"
      }}
    />
  );
};

export default BigCalendar;
