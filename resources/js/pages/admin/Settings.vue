<template>
    <v-container>
        <v-row justify="center">
            <v-col :cols="!isMobile ? 8 : 12">


                        <v-form>
                            <v-container class="pl-0 pr-0">
                                <v-row>
                                    <v-col>
                                        <v-select
                                            prepend-icon="mdi-account-clock"
                                            label="Year"
                                            dense
                                            :items="yearsOfStudy"
                                            v-model="form.Year"
                                        >
                                        </v-select>
                                    </v-col>
                                </v-row>

                                <v-row>
                                    <v-col>
                                        <v-select
                                            prepend-icon="mdi-bank"
                                            label="Dept"
                                            dense
                                            :items="departments"
                                            v-model="form.Dept"
                                        >
                                        </v-select>
                                    </v-col>
                                </v-row>

                                <v-row justify="center">
                                        <v-subheader>
                                            <v-icon>
                                                mdi-account
                                            </v-icon>
 
                                            min and max students per group</v-subheader>
                                            <v-icon>
                                                mdi-account-group
                                            </v-icon>
                                </v-row>
                                <v-row>
                                    <v-row>
                                        <v-col class="px-4">
                                        <v-range-slider
                                            v-model="range"
                                            :max="max"
                                            :min="min"
                                            hide-details
                                            class="align-center"
                                            thumb-label
                                            always-dirty
                                            thumb-color="green"
                                            
                                            
                                        >
                                            <template v-slot:prepend>
                                            <v-text-field
                                                :value="range[0]"
                                                class="mt-0 pt-0"
                                                hide-details
                                                single-line
                                                type="number"
                                                style="width: 30px"
                                                @change="$set(range, 0, $event)"
                                            ></v-text-field>
                                            </template>
                                            <template v-slot:append>
                                            <v-text-field
                                                :value="range[1]"
                                                class="mt-0 pt-0"
                                                hide-details
                                                single-line
                                                type="number"
                                                style="width: 30px"
                                                @change="$set(range, 1, $event)"
                                            ></v-text-field>
                                            </template>
                                        </v-range-slider>
                                        </v-col>
                                    </v-row>

                                </v-row>
<!--                                 <v-row>
                                    <v-col>
                                        <v-select
                                            prepend-icon="mdi-account-group"
                                            label="#students per group"
                                            dense
                                            :items="num"
                                            v-model="form.Num"
                                        >
                                        </v-select>
                                    </v-col>
                                </v-row> -->
                         
                        
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                            id="newDI"
                                            type="text"
                                            label="New Dept"
                                            title="Add New Dept"
                                            prepend-icon="mdi-bank-plus"
                                            v-model="form.new_dept"
                                        ></v-text-field>
                                    
                                    <v-row>
                                        <v-col>
                                        <v-btn rounded color="green" id="addD" @click="addDept" v-if="(form.new_dept)">
                                            confirm
                                            <v-icon> mdi-check-circle-outline</v-icon>
                                        </v-btn>
                                        </v-col>
                                         <v-col>
                                        <v-btn rounded color="red" id="addD" @click="rollbackD"  v-if="numc2>0">
                                            rollback
                                            <v-icon> mdi-reply-outline</v-icon>
                                        </v-btn>
                                         </v-col>
                                    </v-row>
                                        </v-col>
                                  </v-row>
                         
                         
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                            id="newYI"
                                            type="text"
                                            label="New Year"
                                            title="Add New Year"
                                            prepend-icon="mdi-shape-circle-plus"
                                            v-model="form.new_year"
                                        ></v-text-field>
                                
                                    <v-row>
                                        <v-col>
                                        <v-btn rounded color="green" id="addY" @click="addYear" v-if="(form.new_year)">
                                            confirm
                                            <v-icon> mdi-check-circle-outline</v-icon>
                                        </v-btn>
                                        </v-col>
                                        <v-col>
                                        <v-btn rounded color="red" id="addD" @click="rollbackY" v-if="numc1>0">
                                            rollback
                                            <v-icon> mdi-reply-outline</v-icon>
                                        </v-btn>
                                        </v-col>
                                    </v-row>
                                        </v-col>
                                  </v-row>
        
                

  
    <v-tabs
      v-model="tab"
      background-color="red lighten-2"
      dark
    >
      <v-tab
        v-for="dept in departments"
        :key="dept"
      >
        dept: {{dept}}

      </v-tab>
    </v-tabs>


                           
    </v-container> 
 </v-form>    
  </v-col>
  </v-row>
 </v-container>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'
export default {
    name: 'admin-settings',
    data() {
        return {
            form: new Form({
                tab:null,
                department: 'none',
                year: 'none',
                numberOfStudents: 0,
                minNumberOStudents:0,
                maxNumberOfStudens:0
            }),
            yearsOfStudy: [
                'first year',
                'second year',
                'third year',
                'forth year',
                'fifth year'
            ],
            departments: ['none', 1, 2, 3, 4],
            numc1:0,
            numc2:0,
            min: 1,
            max: 7,
            range:[1,7]
        }
    },
    methods:{
        addDept()
        {
            var newD=this.departments;
            newD.splice(newD.length, 1, document.getElementById('newDI').value);
            this.departments=newD;
            this.numc2++;

        },
        addYear()
        {
            var newY=this.yearsOfStudy,
                newIn= document.getElementById('newYI').value;

            newY.splice(newY.length, 1, newIn);
            this.yearsOfStudy=newY;
            this.numc1++;

        },
        rollbackD()
        {
            this.departments.pop();
            this.numc2--;
        },
        rollbackY()
        {
            this.yearsOfStudy.pop();
            this.numc1--;
        },
        changeS()
        {
            var d=this.checked;
            this.checked=!d;
        },
                changeS2()
        {
            var d=this.checked2;
            this.checked2=!d;
        },
        CallColor()
        {
            if (max) return ("red")
             if(min) return("green")
        }
    },
    computed: {
        selectedYear() {
            return this.form.Year
        },
        selectedDept() {
            return this.form.Dept
        },
        selectedNumber() {
            return this.form.Num
        },
        selectedMinNumber()
        {
            return this.range[0]
        },
                selectedMaxNumber()
        {
            return this.range[1]
        },

        ...mapGetters('global', ['isMobile'])
    }
}
</script>

<style lang="scss" scoped></style>
