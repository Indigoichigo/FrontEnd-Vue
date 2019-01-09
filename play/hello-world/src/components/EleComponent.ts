import { Vue, Component, Prop, Watch } from 'vue-property-decorator'
import { State, Getter, Mutation, Action } from 'vuex-class'
import { Bind, Debounce } from 'lodash-decorators'
import { UBT } from '@/decorator'
import HelloWorld from '@/components/HelloWorld.vue'
import BasicMixin from '@/mixin/PrintMixin'

@Component({
  components: {
    HelloWorld
  },
  mixins: [BasicMixin]
})
export default class EleComponent extends Vue {
  @Prop({ default: 'Hello' })
  private text!: string

  @State(state => state.user)
  private user!: string

  @Getter('email')
  private email!: string

  private msg: string = 'Hello Element'
  private name: string = 'Typescript'

  private get userInfo (): string {
    return this.text + this.name
  }
    private set userInfo (val: string) {
    this.text = val
  }

  @Mutation('setUserEmail')
  private setUserEmail!: (email: string) => void

  @Action('getUserInfo')
  private getUserInfo!: (params: {token: string}) => Promise<any>

  @Watch('name', { deep: true })
  private onNameChange () {
    console.log('name has been changed!')
  }

  @UBT('click', Date.now())
  @Bind()
  @Debounce(300)
  private handleClick () {
    console.log('click', this.text)
  }
}