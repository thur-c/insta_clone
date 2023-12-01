import { Image, ScrollView, Text, View, useColorMode } from '@gluestack-ui/themed';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import * as Icons from '@expo/vector-icons';
import Post from '../components/Post';
import { post, story } from '../components/Mock';
import Story from '../components/Story';



export default function Main(){
  const colorMode = useColorMode();
  const color = useColorMode() == 'dark' ? '#fff' : '#000';


  function handleHouseButton(){

  }


  return (
    <View
      bgColor={colorMode === 'light' ? '#ffffff' : '#000'}
      flex={1}
      flexWrap='wrap'
      paddingTop={20}
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
            <Icons.AntDesign name="down" size={16} color={color} />
          </TouchableOpacity>
        </View>

        <View flexDirection='row' gap={20}>
          <TouchableOpacity>
            <Icons.FontAwesome5 name="heart" size={24} color={color} />
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

        <View marginLeft={5}>
          <TouchableOpacity style={{alignItems: 'center', maxWidth: 70}}>
            <View
              borderColor='#00ff00'
              borderWidth={2}
              alignItems='center'
              justifyContent='center'
              width={75}
              height={75}
              bg={useColorMode() == 'dark' ? '#000' : '#fff'}
              padding={1}
              borderRadius={40}
            >
              <Image
                style={{width: '95%', height: '95%', borderRadius: 30, alignItems: 'center', justifyContent: 'center' }}
                resizeMode='cover'
                source='https://i0.wp.com/humorchique.com.br/wp-content/uploads/2022/10/cachorro-melancia.webp?resize=654%2C523&ssl=1'
                alt=''
              />

              <TouchableOpacity
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 20,
                  position: 'absolute',
                  bottom: 0,
                  right: 2,
                  backgroundColor: '#00a300',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1
                }}>
                <View>
                  <Ionicons
                    color={'#fff'}
                    name='add-outline'
                    size={15}
                    style={{flex: 1, marginTop: 1, marginLeft: 1}}
                  />
                </View>
              </TouchableOpacity>

            </View>
          </TouchableOpacity>
          <Text color={color} fontSize={12} textAlign='center'>Seu story</Text>
        </View>
        {story.map((item) =>
          <Story
            key={item.id}
            profileID={item.profileID}
          />
        )
        }
      </ScrollView>



      <ScrollView
        bg={colorMode === 'light' ? '#fff' : '#000'}
        height={'100%'}
        flex={1}
        padding={5}
        contentContainerStyle={
          {
            paddingBottom: 40,
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 20
          }}
      >

        {post.map((item) =>
          <Post
            key={item.id}
            imageUrl={item.imageUrl}
            description={item.description}
            profileID={item.profileID}
          />)
        }


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
        <TouchableOpacity onPress={handleHouseButton}>
          <Icons.Feather
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
          <Icons.Octicons
            name="diff-added"
            size={25}
            color={color} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icons.Octicons
            name="device-camera-video"
            size={25}
            color={color} />
        </TouchableOpacity>



        <TouchableOpacity>
          <Icons.FontAwesome5 name="user-circle" size={24} color={color} />
        </TouchableOpacity>

      </View>

    </View>
  );
}
