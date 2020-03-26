<template>
    <v-container>
        <v-row justify="center">
            <v-col :cols="!isMobile ? 8 : 12">
                <v-card >
                    <v-card-title class="bg-primary" prepend-icon="mdi-tune" dense>General Settings</v-card-title>
             <v-card-text>
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

                                <v-row>
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
                                </v-row>
                         
                           <v-form>
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
                                    
                              
                                        <v-btn color="blue" id="addD" @click="addDept">add dept</v-btn>
                                        </v-col>
                                  </v-row>
                           </v-form>
                                                      <v-form>
                                <v-row>
                                    <v-col>
                                        <v-text-field
                                            id="newYI"
                                            type="text"
                                            label="New Year"
                                            title="Add New Year"
                                            prepend-icon="mdi-bank-plus"
                                            v-model="form.new_year"
                                        ></v-text-field>
                                    
                              
                                        <v-btn color="blue" id="addY" @click="addYear">add year</v-btn>
                                        </v-col>
                                  </v-row>
                           </v-form>
    </v-container> 
 </v-form>    
  </v-card-text>
  </v-card>
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
                department: 'none',
                year: 'first year',
                numberOfStudents: 0
            }),
            yearsOfStudy: [
                'first year',
                'second year',
                'third year',
                'forth year',
                'fifth year'
            ],
            departments: ['none', 1, 2, 3, 4],
            num: [1, 2, 3, 4, 5, 6, 7, 8]
        }
    },
    methods:{
        addDept()
        {
            var newD=this.departments;
            newD.splice(newD.length, 1, document.getElementById('newDI').value);
            thi.departments=newD;

        },
        addYear()
        {
            var newY=this.yearsOfStudy;
            newY.splice(newY.length, 1, document.getElementById('newYI').value);
            thi.yearsOfStudy=newY;

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
        ...mapGetters('global', ['isMobile'])
    }
}
</script>

<style lang="scss" scoped></style>
