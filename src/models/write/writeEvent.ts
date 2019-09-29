import { ObjectID, } from 'mongodb';
import { EventType } from '../../config/events';
import { appendEvent } from '../../repository/mongoRepo';

async function writeEvent(eventType: EventType, event: object): Promise<ObjectID> {
    // TODO schema validation
    // TODO should i: find last id inserted -> business logic ->
    //                before insertion -> validate last ID is same

    return await appendEvent(eventType, event);
}

export { writeEvent, };
