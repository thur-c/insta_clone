import { ScrollView, Text, View, useColorMode } from '@gluestack-ui/themed';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Main(){
  const colorMode = useColorMode();
  const color = useColorMode() == 'dark' ? '#fff' : '#000';

  const GradientBorder = ({ children }: any) => {
    return (
      <View style={{ width: '100%', height: 'auto' }}>
        <LinearGradient
          colors={['#ffd900', '#C913B9']}
          start={{ x: 0, y: 0.9 }}
          end={{ x: 0.5, y: 0.1 }}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            top: -2,
            left: -2,
            right: -2,
            bottom: -2,
            borderRadius: 40,
          }}
        />
        {children}
      </View>
    );
  };


  return (
    <View
      bgColor={colorMode === 'light' ? '#ffffff' : '#000'}
      flex={1}
      flexWrap='wrap'
    >

      <View
        width={'100%'}
        height={60}
        bgColor={colorMode === 'light' ? '#ffffff' : '#000'}
        padding={10}
        alignItems='center'
        justifyContent='space-between'
        flexDirection='row'
      >
        <Text fontWeight='700'> MARGATSNI</Text>

        <View flexDirection='row' gap={20}>
          <TouchableOpacity>
            <Ionicons
              name='heart-outline'
              color={color}
              size={25}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name='chatbubble-ellipses-outline'
              color={color}
              size={25}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name='add-circle-outline'
              color={color}
              size={25}
            />
          </TouchableOpacity>


        </View>
      </View>

      <ScrollView
        flexDirection='row'
        horizontal={true}
        maxHeight={100}
        maxWidth={'100%'}
        paddingRight={10}
        paddingLeft={10}
        contentContainerStyle={
          {gap: 12, alignItems: 'center', justifyContent: 'center', paddingRight: 15}
        }>

        <TouchableOpacity>
          <View
            borderColor='#00ff00'
            borderWidth={2}
            alignItems='center'
            justifyContent='center'
            width={65}
            height={65}
            bg='#333'
            borderRadius={40}

          >
            <View
              width={18}
              height={18}
              borderRadius={20}
              position='absolute'
              bottom={2}
              right={-2}
              bg='green'
              alignItems='center'
              justifyContent='center'
              flex={1}

            >
              <TouchableOpacity>
                <Ionicons
                  color={'#fff'}
                  name='add-outline'
                  size={15}
                  style={{flex: 1, marginTop: 1, marginLeft: 1}}
                />
              </TouchableOpacity>
            </View>

          </View>
          <Text color={color} fontSize={12} textAlign='center'>Seu story</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <GradientBorder>
            <View
              borderColor='transparent'
              borderWidth={2}
              alignItems='center'
              justifyContent='center'
              width={60}
              height={60}
              bg='#333'
              borderRadius={40}

            ></View>
          </GradientBorder>
          <Text color={color} fontSize={12} textAlign='center'>thur_gtr</Text>

        </TouchableOpacity>

      </ScrollView>


      <ScrollView
        bg={colorMode === 'light' ? '#eee' : '#151515'}
        maxHeight={'100%'}
        flex={1}
        padding={20}
        contentContainerStyle={
          {
            paddingBottom: 40,
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 20
          }}
      >

        <View flexDirection='row' alignItems='center' justifyContent='flex-start' flex={1} width={350}>
          <TouchableOpacity style={{marginRight: 10, marginTop: 10}}>
            <GradientBorder>
              <View width={40} height={40} bg='#333' borderRadius={30}></View>
            </GradientBorder>
          </TouchableOpacity>
          <Text color={color} marginTop={10}>thur_gtr</Text>
        </View>


      </ScrollView>

      <View
        height={60}
        mt={'auto'}
        alignItems='center'
        justifyContent='space-between'
        maxWidth={'100%'}
        padding={10}
        paddingLeft={20}
        paddingRight={20}
        bg={colorMode === 'light' ? '#ffffff' : '#000'}
        flexDirection='row'

      >
        <TouchableOpacity>
          <Ionicons
            name='home-outline'
            color={color}
            size={25}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Ionicons
            name='search'
            color={color}
            size={25}
          />
        </TouchableOpacity>


        <TouchableOpacity>
          <Ionicons
            name='videocam'
            color={color}
            size={25}
          />
        </TouchableOpacity>


        <TouchableOpacity>
          <Ionicons
            name='card-outline'
            color={color}
            size={25}
          />
        </TouchableOpacity>


        <TouchableOpacity>
          <Ionicons
            name='person-circle'
            color={color}
            size={25}
          />
        </TouchableOpacity>

      </View>

    </View>
  );
}