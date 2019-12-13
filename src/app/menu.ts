export const menuContent = [
    {
        parent: 'STBL Dashboard',
        link: "/dashboard/summaryView",
        child: [
            {
                name: 'Business Unit',
                child: [
                    {
                        name: 'CSG',
                        link: "/dashboard/CSG",
                        child: []
                    },
                    {
                        name: 'Dell Server & Storage',
                        link: "/dashboard/DSS",
                        child: []
                    },
                    {
                        name: 'Storage & Solutions',
                        link: "/dashboard/EMC",
                        child: []
                    },
                    {
                        name: 'Fullfilment Center',
                        link: "/dashboard/FC",
                        child: []
                    }
                ]
            }
            ,
            {
                name: 'Reports Download',
                link: "/reportDownload",
                child: []
            },
            {
                name: 'Settings',
                link: "/settings",
                child: []
            }
        ]     
    }
]