<View style={styles.inputGroup}>   
          <DatePicker
            style={styles.datePickerStyle}
            date={date}
            mode="date" // The enum of date, datetime and time
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate="01-01-2014"
            maxDate={moment().format('DD-MM-YYYY')}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                //display: 'none',
                position: 'absolute',
                left: 15,
                top: -8,
                marginLeft: 8,
              },
              dateInput: {
                top: -11,
                marginLeft: 30,
                borderWidth: 0
              },
            }}
            onDateChange={(date) => {
              setDate(date);
            }}         
        />
        </View>