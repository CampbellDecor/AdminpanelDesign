import {
    getadminchatHints,
    getadminchatChats,
    getadminchats
} from './Thunks/AdminChat';

export function useAdminChatStore ()
{
    return {
            getadminchatHints,
            getadminchatChats,
            getadminchats
        };

}
