import Typography from "../../../utilities/Typography";
import React, { useState } from "react";
import Nonotification from "./Nonotifications";
import { useTranslation } from "react-i18next";
import Click_Outsite from "../../../utilities/Click_Outsite";
import "./Notification.css";

const Notifications = React.forwardRef(({ handleNotification }, ref) => {
  const { t } = useTranslation("global");
  const notifications = [
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "now",
    },
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "1h ago",
    },
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "4h ago",
    },
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "05, May, 2023",
    },
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "05, May, 2023",
    },
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "05, May, 2023",
    },
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "05, May, 2023",
    },
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "05, May, 2023",
    },
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "05, May, 2023",
    },
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "05, May, 2023",
    },
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "05, May, 2023",
    },
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "05, May, 2023",
    },
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "05, May, 2023",
    },
    {
      dessc:
        "You have a request for edit information for service provider is name : Omer Ahmed - Doctor",
      date: "05, May, 2023",
    },
  ];

  return (
    <div>
      <Click_Outsite onClick={handleNotification} exceptionRef={ref}>
        <div ref={ref}>
          {notifications.length > 0 ? (
            <div className="absolute w-[14rem] sm:w-[26rem] max-h-[24rem] sm:max-h-[36.5rem] overflow-hidden overflow-y-auto hide-scrollbar -start-56 sm:end-8  z-20 top-20 shadow-sm">
              <div className="bg-white py-0 sm:py-4 rounded    ">
                <div className="flex items-center py-3 px-2 sm:px-4 sm:py-5 gap-1">
                  <p className="text-xl font-bold text-myGray-600">
                    {t("notification.0")}
                  </p>
                  <span className="text-error text-sm">-</span>
                  <span className="text-error text-sm">
                    {notifications.length + 1}
                  </span>
                </div>

                <ul className="px-4 sm:px-8">
                  {notifications.map((e, index) => (
                    <div
                      key={index}
                      className="mb-10 pb-5 border-b relative before:absolute before:content-[''] before:w-[0.3rem] before:h-[0.3rem] before:bg-secondary before:rounded-full before:top-[0.40rem] before:-start-2 sm:before:-start-4  "
                    >
                      <li className="mb-2 text-sm">{e.dessc}</li>
                      <span>
                        <Typography component={"h5"}> {e.date}</Typography>
                      </span>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <Nonotification notNumber={notifications.length} />
          )}
        </div>
      </Click_Outsite>
    </div>
  );
});
export default Notifications;
