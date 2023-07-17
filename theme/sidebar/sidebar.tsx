const sidebar = (mode) => ({
    palette: {
        ...(mode === 'dark' ? {
            sidebar: {
                background: "#111827",
                text: '#fff',
                textHover: '#11B981',
                backgroundHover: '#242A38',
                backgroundActive: '#242A38',
                textActive: '#11B981'
            },
        } :
        {
            sidebar: {
                background: '#F4F5FA',
                text: '#333',
                textHover: '#fff',
                backgroundHover: '#11B981',
                backgroundActive: '#11B981',
                textActive: '#fff'
            },
        }),
    }
})
export default sidebar;