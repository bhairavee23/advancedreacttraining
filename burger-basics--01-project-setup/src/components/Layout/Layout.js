const Layout = ( props ) => (
    <div>
        Toolbar, SideDrawer, Backdrop
        <main>
            {props.children}
        </main>
    </div>
);