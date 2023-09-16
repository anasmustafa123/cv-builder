/* import { ReactComponent as Logo } from "./logo.svg";
import logoUrl from "./logo.svg";
let imgs = [
  { name: "logo", key: 0, image: <Logo />, url: logoUrl },
  {
    name: "user",
    key: 1,
    image: <i class="bx bxs-user"></i>,
    url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAZBJREFUOE+11D9IVlEYx/GPEVZQzZFKgfR3aHESFGnQwnSprWixPxSRtASONgmiEQ0RNhSEYw0NlQXREjSkEQ6BVJs4RX+pJS0eOMrldt/3vTfoLPcOz+97fuf5Pec0+Q+rqSRzK/bhEz7gVz1dI+hmXMOpDOQjzuJ+LXAj6GMcwlvEfysGsAlH8LAIXA96FPdwJzldSYAdeI2faKkKvY6L6MBcTjyFM9iDhTy4ntNpHEd7CierHcdldOFFFegIxnCsIJTn6MEWfK8C3ZaO9gPDKag2XMJp3MZQ1Z5Gfbi8m9LO6iOog/jyL9DQ7MI57E/D/woRYs0L0GhOA7oX0YrVtYw3+Fp1+KN3kzicwijSv0OM1lXERmuryOlJ3MIGPMM8Pmc067AT3ekbt60Xi6s1eWj0LQb9G07gSZ2HYyMmcAFP0VcEXY9ZHEA/HpV8wWLjcHoeN0OTdRrXMZJ9ic6SwCj7S5eFhv0Z3EhHKsttTo/Le+zOOx3EA1zBaFliqlvCb2zPQytyapeXGf7Km/0B5YZJFpqWV1IAAAAASUVORK5CYII=",
  },
  {
    name: "link",
    key: 2,
    image: <i class="bx bx-link"></i>,
    url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAZpJREFUOE/N1E2IzWEUx/HPUCwMhWRmolhIKWUjYposKBsvRZm9vEw21LCxt1HT1BSSJiuSkYUSFgpZeKtRoixkYYHFJMLCKB2dq+vp3vu/V035r56e5/y/5+13TpcZ+LpmgOm/gK7BeazFNCZxAG/qM+4k0m24jnl4i7noxSdswqsauBPoPlzEMZxLQJxH8BQb8TPuO4GG/SJMFc0NB4ewBffagfZhEAvwFZfxroAOJOwIzlRB+3ET8+sg37ADd+vuhnEa23G7FTRSuYFuPMEDbMYGfMcKfEwVPMpmrcaXZtBdmMh6H8R4pv8Ze/P+KlbhIZZgZwbxO4GyUVHD15iF3biDrelkP65l2hF1OO5JNYy20ulZHM7mXEnDPYjzbHyoSzWeT+JUOeplpM9SNisLw/UYy5rG0wscx61Gu6OEPsYyLK8J+V8WTgkNnQ3hj+YSGt2O2l5ox0kJjQhfYg6O5jwvRNR6KdbheRW40ZhGRJdSKrX/f+AE/upyM3iz2V+M2EqR9nvcL9dbq2g7XShVmTcUf1s/VRn9AvcjRxZsoUYFAAAAAElFTkSuQmCC",
  },
  {
    name: "skills",
    key: 3,
    image: <i class="bx bxs-brain"></i>,
    url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAZBJREFUOE+11L9LV1EYx/GXNBZFgxCVU0tDYtDQUFGDIEjmIA4uKYRtEeTWP+BWEE0FJShOLRktggiNLtogEbb1i3IpnByCeOLcOFzOvfeb0J3OPed53jw/P33+w9fXA3MQP/Ax2V7E+3RXdO+CLmMK2ziHK3iDX5jAyxK1CXoCl/AiOX3BKVzHq3S3gbvYxH4OL0GnsVCL4CtOYgwrtbfPuIBv1X0degg/cfgfoGH6EPeaoGfxrlCnKtI8/dxsDcNN0Ih8B2dq4FJNc5M5PChBozGPcb4QaRc0puF5KsFeXtMtDDXMbVujcpfbeFpBT2fDXeJ2RVr5xLjdqKD9+N6yXV2Nqlyf4Vae/hPMNoB7iXQPV2MZcmicY8ePHqBR4TKP+3HIoTFGHzoa1TSn4baKkTr0WIvy9JL+Im7WofH/CHcOsFEhKCGJb0vQ2P0ZjCfxqPghGjF29fR3EREuJbX6Y9+mp+u4lqifMIBRvM4ymczk8e91GzQgMWKXUyQxg8dTiY4kga5LZGekLbvQ/vQbMEtWFv6R0wkAAAAASUVORK5CYII=",
  },
  {
    name: "experiece",
    key: 4,
    image: <i class="bx bxs-briefcase"></i>,
    url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAP5JREFUOE/d1D0vBFEUxvHfNjrU9KIWG0oaFRKJCPEBqH0CqxaJUq3RSCSiVGiFLRQapUR8AJRCjuwkYzOzs5NrGk8595z/fc7L3JYG1KpgjmOmIOYD9/gqyh8E3cQpRkoufsQ84oJfGgS9wBqO8N6Xt4gFLOG6DvQKy5jEa19iB/tYRcSVOp3AFqKPoW1MVTg9w1Mv/gGX+MzKD9AzxhKX4Rh7GXS2N81EpjvMZdA2Px9S1UW7UegoogVluskdxECnSwLf0B3WaX6fd3FSAq1V/kEOEhWt/AV02AHWcvrPobEmL6h6X6vacI6NPGQHhwn//y3Ww1yqs0LnjUC/AWALMxZje4xqAAAAAElFTkSuQmCC",
  },
  {
    name: "folder",
    key: 5,
    image: <i class="bx bxs-folder-plus"></i>,
    url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAPNJREFUOE/N1D1KQ1EQhuEnjaUWVmYBVoIoUXARVmoTSGl6V2EhorULsLJyDQEREXQHNmKTKloJERm4B5KrifdcEnXgdPO952P+GuYQjTkwlaEbWBr56AnxsiJBF9DDVkn9gQ4uc6gJuo6HKcIzDH4AP+IawwRt4S7HzYTccxzNGhrGtmcNvUerKvQFTewWdZtUqb+Dxs9v6GMfOzgubK5ipWS5ktOYikj8Li5wWAcawqjnK04R7toFKOq7WQeaNP+/UcnpO26wjLUpm1epUbmbOwaN0XjmyynMhV7hYPSednGCxVxSkX+LvTD3K5e/pslx2Se8PzsWF2GcmwAAAABJRU5ErkJggg==",
  },
  {
    name: "education",
    key: 6,
    image: <i class="bx bxs-school"></i>,
    url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAANZJREFUOE/t1K1OA1EQhuFnBRJbwQVgSN0KRBMMCYorqGkNBM3VgGhCQoJD1dYUV1KFATxBcAGIijYn2U027S77k2yaTRhzxMn3znwzZ06khYhaYNor9BC3+MBTmbuqlR7hC1Nc/kP/7ED3ehrjFfe4zni7wl2O1x+cIJxprLFEnNovggbBBOOMeIUBFlvJakEPMMdpAhnhIaf6WtCg7+ENz7gpGH1taOD08Y5gPy8aQcu2cwd6nHwW3/gsUxfcn2GG8+zjf8SwITDIfnGBl6obVStXd6Ab3GY5FgMqggMAAAAASUVORK5CYII=",
  },
  { name: "download", key: 7, image: <i class="bx bx-download"></i> },
  {
    name: "trash",
    key: 8,
    image: <i class="bx bxs-trash"></i>,
    url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAQ1JREFUOE/t1b8uBUEUBvDfTUSn0oieikpD5aoUopIoNLyBXoNKpfAUNxKVeACJQuMBRKVT0KH0J0d2k929Y2cR3T3JJJPMd77zZ74z0/MP1stwTmAhgXnFDT5S/m2k6zjD+DeBbzGHt+Z5G+kpNnGMl4ZjH8tYweVPSC+whmk8NBwPsI+oJnA1q2Y6i63KaexnMpkOcFf4PBdYVdKIev4HMUQ1UVWNdBLz2ME29nCdCXKERWwULfrCpy6qtV+NIMm+dyGNskKPUVrZokNE8BHpsJZHPR2Sd1OnSwUihF0OyD1i/VpSbUPVmTRGLt7RrvaIKbyXDqnbj0d5F6sYyzA/4QRXVVzuO+mabQ33CVhLaBY9wHo2AAAAAElFTkSuQmCC",
  },
  {
    name: "show",
    key: 9,
    image: <i class="bx bx-show-alt"></i>,
    url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAatJREFUOE/d1M9rz3EcB/DHEFo5KWkcaDYHltR2oEi5ILWDloU/wEGJyGouLrss4uAkt01xcFhzwnahRHLxo7hY8+NCyjgQs156ffXus+93Tt/LXsfX+/N6vp6v5+v5+rRoQrQ0AdPiAY1JdqAd6/Ad7/EE042kazT+cpzFcayvU/wH93ABD6vv9UC34SY24y0m8AovsBqd2I4DWILLOIPfNfAq6D7czsdhDOFHgzG7cBW7cD+b/IxvS9AteIpv2I2XCbYGV7AVAVSNYHoSozhWBZ3EHhzEnaLyFvrwMfWdraCGBI/Qk6wf1Jhuwptk2l0peo2OzF3DDXzC8+K7vbm4MfTWQFfiHVZgAz4XBbHlKCrjUKF95E/jYu5gsNT0FC4lk6MFQkhyF8sy9xg7i22Hh5/hV/r5Swm6FEE/rBJjhk2+JlCw78UUxhMgnqLhCNZifzafd/utqU1cUegWY4VdPhTM4zDCBedygXEI/YiF/o165l+F8ziBaBIxkwcQ5t+Ypo98WHAgifzru9BfKsAP40gury1vPxYaFrqO0HdeLJ5fX73p/ptryvhzOBpRFuTjbhkAAAAASUVORK5CYII=",
  },
];
export { imgs };
 */