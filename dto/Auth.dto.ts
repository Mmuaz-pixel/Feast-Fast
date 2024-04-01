import { VandorPayLoad } from "./Vandor.dto";

export type AuthPayLoad = VandorPayLoad; 

// purpose of Auth pay load is to make a generic type of Payload to add in req.user on login (for example) 

// we can scale it based on our other payloads e.g., 

// export type AuthPayLoad = VandorPayLoad | UserPayLoad etc ; 
