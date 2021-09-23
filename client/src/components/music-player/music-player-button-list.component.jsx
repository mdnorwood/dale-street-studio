import { MusicPlayerButtonList, MusicPlayerListButton } from './music-player.styles';

const MusicPlayerButtonListContainer = () => (

  onChangeToFirstAudioList = () => {
    this.updateParams({
      clearPriorAudioLists: true,
      quietUpdate: false,
      audioLists: audioList1,
    })
  }

  onChangeToSecondAudioList = () => {
    this.updateParams({
      clearPriorAudioLists: true,
      quietUpdate: false,
      audioLists: audioList2,
    })
  }

  onChangeToThirdAudioList = () => {
    this.updateParams({
      clearPriorAudioLists: true,
      quietUpdate: false,
      audioLists: audioList3,
    })
  }

  onQuietUpdateAudioList = () => {
    this.updateParams({
      clearPriorAudioLists: true,
      quietUpdate: true,
      audioLists: audioList3,
    })
  }

    return (

            <MusicPlayerListButton style={{ margin: '10px', paddingBottom: '10px' }} type="button" onClick={this.onChangeToFirstAudioList}>
              Rock & Soul ({audioList1.length})
            </MusicPlayerListButton>
            <MusicPlayerListButton s type="button" onClick={this.onChangeToSecondAudioList}>
              Jazz ({audioList2.length})
            </MusicPlayerListButton>
            <MusicPlayerListButton   type="button" onClick={this.onChangeToThirdAudioList}>
              Hiphop ({audioList3.length})
          </MusicPlayerListButton>
    )
);

export default MusicPlayerButtonListContainer;
