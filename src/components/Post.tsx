import { useState, useRef } from 'react';
import { Image, Text, View, useColorMode } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import * as Icons from '@expo/vector-icons';
import { profile } from './Mock';


interface PostProps{
  imageUrl: string;
  profileID: string;
  description: string;
}

function getProfileName(profileID: string) {
  const foundProfile = profile.find(profile => profile.id === profileID);
  return foundProfile!.name;
}

function getProfilePhoto(profilePhoto: string) {
  const foundProfile = profile.find(profile => profile.id === profilePhoto);
  return foundProfile!.photo;
}

export default function Post({imageUrl,description, profileID}: PostProps){
  const color = useColorMode() == 'dark' ? '#fff' : '#000';
  const [likes, setLikes] = useState(0);
  const [saved, setSaved] = useState(false);
  const lastPress = useRef(0);
  const profileName = getProfileName(profileID);
  const profilePhoto = getProfilePhoto(profileID);
  const GradientBorder = ({ children }: any) => {
    return (
      <View style={{ width: '99%', height: 'auto' }}>
        <LinearGradient
          colors={['#ffd900', '#cc19bd']}
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


  function handleLikes(){
    setLikes(likes === 1 ? 0 : + 1);
  }

  function handleSave(){
    setSaved(saved === true ? false : true);
  }

  const handleDoublePress = () => {
    const now = Date.now();
    const DOUBLE_PRESS_DELAY = 500;

    if (now - lastPress.current < DOUBLE_PRESS_DELAY) {
      setLikes(1);

      lastPress.current = 0;
    } else {
      lastPress.current = now;
    }
  };



  return(

    <View flex={1} width={'100%'} height={'100%'} >

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
          paddingLeft={4}
        >
          <TouchableOpacity>
            <GradientBorder>
              <View
                width={40}
                height={40}
                bg='#000'
                padding={1}
                borderRadius={30}>
                <Image

                  style={{width: '100%', height: '100%', borderRadius: 30 }}
                  resizeMode='cover'
                  source={profilePhoto}
                  alt={profileName}
                />
              </View>
            </GradientBorder>
          </TouchableOpacity>
          <Text
            color={color}
            fontSize={14}
            marginLeft={10}>
            {profileName}
          </Text>
        </View>

        <TouchableOpacity style={{marginTop: 10}}>
          <Icons.SimpleLineIcons name="options-vertical" size={16} color={color} />
        </TouchableOpacity>

      </View>
      <TouchableOpacity activeOpacity={10} onPress={handleDoublePress}>
        <View maxWidth={'100%'} height={380}  alignItems='center' justifyContent='center'>


          <Image
            marginTop={5}
            style={{width: '100%', height: '100%' }}
            resizeMode='contain'
            source={imageUrl}
            alt={description}
          />
        </View>
      </TouchableOpacity>
      <View
        marginTop={15}

        width={'100%'}
        height={32}
        paddingHorizontal={5}
        flexDirection='row'
        gap={15}
        alignItems='center'
        justifyContent='flex-start'

      >
        <TouchableOpacity onPress={handleLikes}>
          <Icons.AntDesign
            name={likes > 0 ? 'heart' : 'hearto'}
            size={25}
            color={likes > 0 ? '#f55' : color}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icons.Ionicons
            name='chatbubble-outline'
            color={color}
            size={25}
          />
        </TouchableOpacity>

        <TouchableOpacity>
          <Icons.Feather
            name='send'
            color={color}
            size={24}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleSave}
          style={{position: 'absolute', right: 0, alignSelf: 'center'}}>
          <Icons.FontAwesome
            name={saved == true ? 'bookmark' : 'bookmark-o'}
            color={color}
            size={25}
          />
        </TouchableOpacity>
      </View>
      <View paddingHorizontal={5}>
        {likes > 0 &&
          <Text fontWeight='700' color={color}>{likes} likes</Text>
        }
        <View flexDirection='row'>
          <TouchableOpacity activeOpacity={0.6}>
            <Text fontWeight='700' color={color} fontSize={15}>{profileName}</Text>
          </TouchableOpacity>
          <Text color={color} fontSize={15}> {description}</Text>
        </View>
      </View>
    </View>
  );
}
