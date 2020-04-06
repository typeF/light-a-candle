import React, { createContext } from "react";
import PropTypes from "prop-types";

// create socket Context to consume
export const SocketContext = createContext();

function SocketContextProvider({ socket, children }) {
  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
}

SocketContextProvider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  socket: PropTypes.any.isRequired,
  children: PropTypes.node.isRequired,
};

export default SocketContextProvider;
