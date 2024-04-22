import { useState } from "react";
import FullCalendar from "@fullcalendar/react"; 
import dayGridPlugin from "@fullcalendar/daygrid";
import { Paper, Stack } from "@mui/material";
import { formatDate } from "@fullcalendar/core";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const CalenderPage = () =>{

    const [weekendsVisible, setweekendsVisible] = useState(true);
    const [currentEvents, setcurrentEvents] = useState([]);

    function renderEventContent(eventInfo) {
        return (
            <>
            <b>{eventInfo.timeText}</b>
            <i>{eventInfo.event.title}</i>
            </>
        );
    }
        
    function renderSidebarEvent(event) {
        return (
            <li key={event.id}>
            <b>
                {formatDate(event.start, {
                year: "numeric",
                month: "short",
                day: "numeric",
                })}
            </b>
            <i>{event.title}</i>
            </li>
        );
    }


  let eventGuid = 0;
  function createEventId() {
    return String(eventGuid++);
  }

  const handleDateSelect = (selectInfo) => {
    let title = prompt("Please enter a new title for your event");
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo) => {
    if (
        window.confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events) => {
    setcurrentEvents(events);
  };

    return(
        <Stack direction={"row"} flexWrap={"wrap"} gap={"30px"} px={"20px"} py={"45px"}>
            <Paper className="min-w-[250px] min-h-[600px] grow p-5">
                <h2 className="text-center text-2xl font-extrabold dark:text-white">
                    All Events ({currentEvents.length})
                </h2>
                <ul>{currentEvents.map(renderSidebarEvent)}</ul>
            </Paper>

            <div className="min-h-[600px] grow overflow-x-auto [&>.fc]:h-full [&>.fc]:min-w-[500px] dark:[&>.fc]:text-white">
                <FullCalendar
                    plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                    headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth,timeGridWeek,timeGridDay",
                    }}
                    initialView="dayGridMonth"
                    editable={true}
                    selectable={true}
                    selectMirror={true}
                    dayMaxEvents={true}
                    weekends={weekendsVisible}
                    select={handleDateSelect}
                    eventContent={renderEventContent}
                    eventClick={handleEventClick}
                    eventsSet={handleEvents} 
                />
            </div>
       </Stack>
    )
}
export default CalenderPage;