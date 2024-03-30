const serializationMiddleware = () => (next) => (action) => {
    // Serialize non-serializable values in the action payload
    const serializedPayload = serializePayload(action.payload);
    // Dispatch the action with the serialized payload
    return next({ ...action, payload: serializedPayload });
  };
  
  // Helper function to serialize non-serializable values
  const serializePayload = (payload) => {
    // Implement serialization logic as needed
    // For example, use JSON.stringify to serialize objects
    if (typeof payload === 'object') {
      return JSON.stringify(payload);
    }
    // Return the payload unchanged if it's already serializable
    return payload;
  };
  
  export default serializationMiddleware;
  