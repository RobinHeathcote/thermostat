class Temperature
  def self.store(temperature)
    @temperature = temperature
  end

  def self.get
    @temperature ||= '20'
    @temperature
  end
end
