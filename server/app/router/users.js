export function usersRoute (router) {
    router.get('/users', (req, res) => {
        res.json({success: 'Its work'});
    });
}