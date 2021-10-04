const session = {
    user: null,
    messages: []


};

export default session;

export function Login(){

    session.user = {
        FirstName : 'Henry',
        LastName: 'Maldonado',
        id: 613
    }
}