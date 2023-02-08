// project import
import ThemeRoutes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
    <ThemeCustomization>
        <ScrollTop>
            <ThemeRoutes />
        </ScrollTop>
    </ThemeCustomization>
);

export default App;
