import { ScrollView } from './ScrollView';
import { Text } from '../../typography/Text';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Components/Simple/Scroll/ScrollView',
    component: ScrollView,
};

export const Default = args => (
    <>
        <ScrollView {... args}>
            <Text variant='h6' >
                This component allows everything that is placed inside it to be scrollable, it can be text or a set of other components!
                This component allows everything that is placed inside it to be scrollable, it can be text or a set of other components!
                This component allows everything that is placed inside it to be scrollable, it can be text or a set of other components!
                This component allows everything that is placed inside it to be scrollable, it can be text or a set of other components!
            </Text>
        </ScrollView>
    </>
);

Default.args = {
};
