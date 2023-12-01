import { Image, Text, View, useColorMode } from '@gluestack-ui/themed';
import { TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { profile } from './Mock';

interface StoryProps{
  profileID: string;
}

function getProfileName(profileID: string) {
  const foundProfile = profile.find(profile => profile.id === profileID);
  return foundProfile!.name;
}

function getProfilePhoto(profilePhoto: string) {
  const foundProfile = profile.find(profile => profile.id === profilePhoto);
  return foundProfile!.photo;
}

export default function Story({profileID}: StoryProps){
  const profileName = getProfileName(profileID);
  const profilePhoto = getProfilePhoto(profileID);

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


  return(

    <View>
      <TouchableOpacity>
        <GradientBorder>
          <View
            borderColor='transparent'
            borderWidth={2}
            alignItems='center'
            justifyContent='center'
            width={75}
            height={75}
            borderRadius={48}
            padding={1}
            bg={useColorMode() == 'dark' ? '#000' : '#fff'}
          >
            <Image
              style={{width: '100%', height: '100%', borderRadius: 40}}
              resizeMode='cover'
              source={profilePhoto}
              alt={profileName}
            />

          </View>
        </GradientBorder>

      </TouchableOpacity>

      <Text color={color} fontSize={12} textAlign='center'>{profileName}</Text>
    </View>
  );
}
