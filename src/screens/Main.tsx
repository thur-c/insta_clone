import { Image, ScrollView, Text, View, useColorMode } from '@gluestack-ui/themed';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Feather, SimpleLineIcons, FontAwesome5, AntDesign, Octicons } from '@expo/vector-icons';

export default function Main(){
  const colorMode = useColorMode();
  const color = useColorMode() == 'dark' ? '#fff' : '#000';

  const GradientBorder = ({ children }: any) => {
    return (
      <View style={{ width: '99%', height: 'auto' }}>
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
        <View flexDirection='row' alignItems='center' gap={6}>
          <Text fontWeight='700'> MARGATSNI</Text>
          <TouchableOpacity>
            <AntDesign name="down" size={16} color={color} />
          </TouchableOpacity>
        </View>

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
              width={65}
              height={65}
              bg='#333'
              borderRadius={40}

            ></View>
          </GradientBorder>
          <Text color={color} fontSize={12} textAlign='center'>thur_gtr</Text>

        </TouchableOpacity>

      </ScrollView>


      <ScrollView
        bg={colorMode === 'light' ? '#eee' : '#000'}
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
        <View flex={1} width={'100%'} height={'100%'}>
          <View
            justifyContent='space-between'
            flexDirection='row'
            alignItems='center'
            paddingRight={10}
            height={60}>
            <View
              flexDirection='row'
              alignItems='center'
              justifyContent='flex-start'
              flex={1}
              width={350}
              paddingTop={10}
              paddingHorizontal={10}>

              <TouchableOpacity>
                <GradientBorder>
                  <View
                    width={40}
                    height={40}
                    bg='#333'
                    borderRadius={30}>

                  </View>
                </GradientBorder>
              </TouchableOpacity>
              <Text
                color={color}
                fontSize={14}
                marginLeft={10}>
                  thur_gtr
              </Text>
            </View>

            <TouchableOpacity style={{  marginTop: 10}}>
              <SimpleLineIcons name="options" size={20} color={color} />
            </TouchableOpacity>

          </View>
          <View maxWidth={'100%'} height={380} marginTop={5} alignItems='center' justifyContent='center'>
            <Image
              style={{width: 375, height: '100%' }}
              source='https://thumbs2.imgbox.com/64/10/eB543162_t.jpg'
              accessibilityLabel='Gatinho'
              alt='Gatinho'
            />
          </View>
        </View>
        <View flex={1} width={'100%'} height={'100%'}>
          <View
            justifyContent='space-between'
            flexDirection='row'
            alignItems='center'
            paddingRight={10}
            height={60}>
            <View
              flexDirection='row'
              alignItems='center'
              justifyContent='flex-start'
              flex={1}
              width={350}
              paddingTop={10}
              paddingHorizontal={10}>

              <TouchableOpacity>
                <GradientBorder>
                  <View
                    width={40}
                    height={40}
                    bg='#333'
                    borderRadius={30}>

                  </View>
                </GradientBorder>
              </TouchableOpacity>
              <Text
                color={color}
                fontSize={14}
                marginLeft={10}>
                  thur_gtr
              </Text>
            </View>

            <TouchableOpacity style={{  marginTop: 10}}>
              <SimpleLineIcons name="options" size={20} color={color} />
            </TouchableOpacity>

          </View>
          <View maxWidth={'100%'} height={380} marginTop={5} alignItems='center' justifyContent='center'>
            <Image
              style={{width: 375, height: '100%' }}
              source='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCXsbUwbvbDDyt-rtsoYDyFpcIHRjzgK286Q&usqp=CAU'
              accessibilityLabel='Gatinho'
              alt='Gatinho'
            />
          </View>
        </View>
        <View flex={1} width={'100%'} height={'100%'}>
          <View
            justifyContent='space-between'
            flexDirection='row'
            alignItems='center'
            paddingRight={10}
            height={60}>
            <View
              flexDirection='row'
              alignItems='center'
              justifyContent='flex-start'
              flex={1}
              width={350}
              paddingTop={10}
              paddingHorizontal={10}>

              <TouchableOpacity>
                <GradientBorder>
                  <View
                    width={40}
                    height={40}
                    bg='#333'
                    borderRadius={30}>

                  </View>
                </GradientBorder>
              </TouchableOpacity>
              <Text
                color={color}
                fontSize={14}
                marginLeft={10}>
                  thur_gtr
              </Text>
            </View>

            <TouchableOpacity style={{  marginTop: 10}}>
              <SimpleLineIcons name="options" size={20} color={color} />
            </TouchableOpacity>

          </View>
          <View maxWidth={'100%'} height={380} marginTop={5} alignItems='center' justifyContent='center'>
            <Image
              style={{width: 375, height: '100%' }}
              source='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8UqaMZ5TMfDLW8vWc32DjAwsC_IOzXDB7PWtm9qO969Yc1w7EA_iJq54DyU0qgF_g3oU&usqp=CAU'
              accessibilityLabel='Gatinho'
              alt='Gatinho'
            />
          </View>
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
          <Feather
            name='home'
            size={25}
            color={color}
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
          <Octicons
            name="diff-added"
            size={24}
            color={color} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Octicons
            name="device-camera-video"
            size={24}
            color={color} />
        </TouchableOpacity>



        <TouchableOpacity>
          <FontAwesome5 name="user-circle" size={24} color={color} />
        </TouchableOpacity>

      </View>

    </View>
  );
}
