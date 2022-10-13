import { useState } from "react";

const dummyNotifications = [
  {
    title: "Welcome to Explora, your registration was successfull",
    timeStamp: "3 mins ago",
  },
  {
    title: "Welcome to Explora, your registration was successfull",
    timeStamp: "3 mins ago",
  },
  {
    title: "Welcome to Explora, your registration was successfull",
    timeStamp: "3 mins ago",
  },
  {
    title: "Welcome to Explora, your registration was successfull",
    timeStamp: "3 mins ago",
  },
  {
    title: "Welcome to Explora, your registration was successfull",
    timeStamp: "3 mins ago",
  },
  {
    title: "Welcome to Explora, your registration was successfull",
    timeStamp: "3 mins ago",
  },
  {
    title: "Welcome to Explora, your registration was successfull",
    timeStamp: "3 mins ago",
  },
  {
    title: "Welcome to Explora, your registration was successfull",
    timeStamp: "3 mins ago",
  },
];

function Notifications() {
  const [notifications, setNotifications] = useState(dummyNotifications);
  const handleDelete = () => {
    alert('notification deleted')
  };
  return (
    <div className="container mx-auto my-4">
      <h1 className="text-xl font-medium">Notifications</h1>
      <div className="my-2 border-gray-400 border-2 rounded">
        {notifications.map((noti, index) => {
          return (
            <div
              className={`${
                index % 2 === 0 ? "bg-gray-200" : "bg-gray-100"
              } flex items-center justify-between p-4`}
            >
              <div className="flex flex-col">
                <span>{noti.title}</span>
                <span>{noti.timestamp}</span>
              </div>
              <button
                onClick={handleDelete}
                className="text-red-500 hover:text-red-800 text-sm font-medium"
              >
                delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Notifications;
